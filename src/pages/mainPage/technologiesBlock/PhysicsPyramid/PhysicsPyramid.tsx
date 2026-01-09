import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import styles from './PhysicsPyramid.module.scss';

const PYRAMID = [7, 6, 5];

const BOXES = [
  { id: '1', text: '< React />', color: '#61dafb' },
  { id: '2', text: '< TypeScript />', color: '#3178c6' },
  { id: '3', text: '< Material UI />', color: '#f59f00' },
  { id: '4', text: '< JavaScript />', color: '#51cf66' },
  { id: '5', text: '< Git />', color: '#748ffc' },
  { id: '6', text: '< Redux />', color: '#ff6b6b' },
  { id: '7', text: '< Websockets />', color: '#51cf66' },
  { id: '8', text: '< HTML5 />', color: '#ffa94d' },
  { id: '9', text: '< CSS />', color: '#748ffc' },
  { id: '10', text: '< SCSS />', color: '#ff6b6b' },
  { id: '11', text: '< Three.js />', color: '#ff6b6b' },
  { id: '12', text: '< Matter.js />', color: '#e64980' },
  { id: '13', text: '< Axios />', color: '#20c997' },
  { id: '14', text: '< Storybook />', color: '#845ef7' },
  { id: '15', text: '< Vite />', color: '#fab005' },
  { id: '16', text: '< Webpack />', color: '#ff922b' },
  { id: '17', text: '< i18n />', color: '#20c997' },
  { id: '18', text: '< CI/CD />', color: '#20c997' },
];

type Position = { x: number; y: number };

export const PhysicsPyramid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodiesRef = useRef<Record<string, Matter.Body>>({});
  const elementsRef = useRef<Record<string, HTMLDivElement>>({});
  const wallsRef = useRef<Matter.Body[]>([]);
  const engineRef = useRef<Matter.Engine | null>(null);

  const createPyramidLayout = (
    rows: number[],
    containerWidth: number,
    boxWidth: number,
    boxHeight: number,
    gap: number,
  ): Position[] => {
    const positions: Position[] = [];
    let y = boxHeight;

    rows.forEach((count) => {
      const rowWidth = count * boxWidth;
      const startX = (containerWidth - rowWidth) / 2 + boxWidth / 2;

      for (let i = 0; i < count; i++) {
        positions.push({ x: startX + i * (boxWidth), y });
      }
      y += boxHeight + gap;
    });

    return positions;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const { Engine, World, Bodies, Runner, Mouse, MouseConstraint, Body } = Matter;

    const container = containerRef.current;
    const engine = Engine.create();
    engine.gravity.y = 1;
    engine.positionIterations = 12;
    engine.velocityIterations = 10;

    engineRef.current = engine;

    const computeSizes = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const BOX_WIDTH = width / 8;
      const BOX_HEIGHT = BOX_WIDTH / 3;
      const GAP = Math.max(BOX_WIDTH / 6, 8);
      return { width, height, BOX_WIDTH, BOX_HEIGHT, GAP };
    };

    let { width, height, BOX_WIDTH, BOX_HEIGHT, GAP } = computeSizes();

    // создаем стены контейнера
    const createWalls = () => {
      const floor = Bodies.rectangle(width / 2, height + 10, width, 20, { isStatic: true });
      const left = Bodies.rectangle(-10, height / 2, 20, height, { isStatic: true });
      const right = Bodies.rectangle(width + 10, height / 2, 20, height, { isStatic: true });
      wallsRef.current = [floor, left, right];
      World.add(engine.world, wallsRef.current);
    };

    createWalls();

    const positions = createPyramidLayout(PYRAMID, width, BOX_WIDTH, BOX_HEIGHT, GAP);

    BOXES.forEach((box, i) => {
      const pos = positions[i];
      const body = Bodies.rectangle(pos.x, pos.y, BOX_WIDTH, BOX_HEIGHT, {
        restitution: 0.2,
        friction: 0.5,
        frictionAir: 0.02,
        density: 0.005,
        collisionFilter: { group: 1 },
      });
      bodiesRef.current[box.id] = body;
      World.add(engine.world, body);
    });

    const mouse = Mouse.create(container);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });

    World.add(engine.world, mouseConstraint);

    Runner.run(Runner.create(), engine);

    const update = () => {
      const { BOX_WIDTH, BOX_HEIGHT } = computeSizes();

      BOXES.forEach(({ id }) => {
        const body = bodiesRef.current[id];
        const el = elementsRef.current[id];
        if (!body || !el) return;

        const isDragged = mouseConstraint.body === body;
        const isMoving =
          Math.abs(body.velocity.x) > 0.01 ||
          Math.abs(body.velocity.y) > 0.01 ||
          Math.abs(body.angularVelocity) > 0.001;

        if (isMoving || isDragged) {

          el.style.width = `${BOX_WIDTH}px`;
          el.style.height = `${BOX_HEIGHT-2}px`;
          el.style.fontSize = `${BOX_HEIGHT / 4}px`;
          el.style.transform = `translate(${body.position.x - BOX_WIDTH / 2}px, ${
            body.position.y - BOX_HEIGHT / 2
          }px) rotate(${body.angle}rad)`;
        }
      });

      requestAnimationFrame(update);
    };

    update();

    const handleResize = () => {
      if (!containerRef.current) return;
      const { width: w, height: h, BOX_WIDTH: bw, BOX_HEIGHT: bh, GAP: g } = computeSizes();
      width = w;
      height = h;
      BOX_WIDTH = bw;
      BOX_HEIGHT = bh;
      GAP = g;

      World.remove(engine.world, wallsRef.current);
      createWalls();

      const newPositions = createPyramidLayout(PYRAMID, width, BOX_WIDTH, BOX_HEIGHT, GAP);
      BOXES.forEach((box, i) => {
        const body = bodiesRef.current[box.id];
        if (body) Body.setPosition(body, newPositions[i]);
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      Engine.clear(engine);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {BOXES.map((box) => (
        <div
          key={box.id}
          ref={(el) => {
            if (el) elementsRef.current[box.id] = el;
          }}
          className={styles.item}
          style={{ color: box.color, border: `1px solid ${box.color}` }}
        >
          {box.text}
        </div>
      ))}
    </div>
  );
};
