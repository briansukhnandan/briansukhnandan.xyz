"use client";
import { useEffect, useRef } from "react";
import {
  Engine,
  Render,
  Runner,
  Bodies,
  Composite,
  World,
} from "matter-js";
import * as PIXI from "pixi.js";

export default function Simulator() {
  return (
    <div>
      <h1>2D Simulator</h1>
      <PhysicsSceneImproved />
    </div>
  );
}

export function PhysicsScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const MatterEngine = Engine;
    const MatterRender = Render;
    const MatterRunner = Runner;
    const MatterBodies = Bodies;
    const MatterComposite = Composite;

    const engine = MatterEngine.create();

    const render = MatterRender.create({
      element: sceneRef.current as HTMLDivElement,
      engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: "#111",
      },
    });

    const box = MatterBodies.rectangle(400, 200, 80, 80, {
      restitution: 0.9,
    });

    const ground = MatterBodies.rectangle(400, 580, 810, 60, {
      isStatic: true,
    });

    MatterComposite.add(engine.world, [box, ground]);

    MatterRender.run(render);

    const runner = MatterRunner.create();
    MatterRunner.run(runner, engine);

    return () => {
      MatterRender.stop(render);
      World.clear(engine.world, false);
      MatterEngine.clear(engine);
    };
  }, []);

  return <div ref={sceneRef} />;
}

export function PhysicsSceneImproved() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // -----------------------------
    // MATTER SETUP
    // -----------------------------

    const engine = Engine.create();

    const box = Bodies.rectangle(400, 100, 80, 80, {
      restitution: 0.9,
    });

    const ground = Bodies.rectangle(400, 580, 810, 60, {
      isStatic: true,
    });

    Composite.add(engine.world, [box, ground]);

    const runner = Runner.create();
    Runner.run(runner, engine);

    // -----------------------------
    // PIXI SETUP
    // -----------------------------

    const app = new PIXI.Application();

    async function setupPixi() {
      await app.init({
        width: 800,
        height: 600,
        background: "#111111",
        antialias: true,
      });

      sceneRef.current?.appendChild(app.canvas);

      // -----------------------------
      // BOX GRAPHIC
      // -----------------------------

      const boxGraphic = new PIXI.Graphics();

      boxGraphic.rect(-40, -40, 80, 80);
      boxGraphic.fill("#3b82f6");

      app.stage.addChild(boxGraphic);

      // -----------------------------
      // GROUND GRAPHIC
      // -----------------------------

      const groundGraphic = new PIXI.Graphics();

      groundGraphic.rect(-405, -30, 810, 60);
      groundGraphic.fill("#1e293b");

      app.stage.addChild(groundGraphic);

      // -----------------------------
      // ANIMATION LOOP
      // -----------------------------

      app.ticker.add(() => {
        // Sync box
        boxGraphic.x = box.position.x;
        boxGraphic.y = box.position.y;
        boxGraphic.rotation = box.angle;

        // Sync ground
        groundGraphic.x = ground.position.x;
        groundGraphic.y = ground.position.y;
        groundGraphic.rotation = ground.angle;
      });
    }

    setupPixi();

    // -----------------------------
    // CLEANUP
    // -----------------------------

    return () => {
      Runner.stop(runner);
      Engine.clear(engine);
      // app.destroy(true, { children: true, texture: true });
      // app.destroy({
      //   removeView: true,
      // });
    };
  }, []);

  return <div ref={sceneRef} />;
}
