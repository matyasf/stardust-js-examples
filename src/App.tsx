import React from 'react';
import {Age, DeathLife, Emitter, Move, StardustSerializer, SteadyClock, UniformRandom} from "stardust-library-js";

function App() {
  console.log("test");
  const emitter: Emitter = new Emitter();
  emitter.fps = 43;
  const cl: SteadyClock = new SteadyClock();
  cl.ticksPerCall = 222;
  const r1: UniformRandom = new UniformRandom();
  r1.radius = 7;
  r1.center = 5;
  cl.initialDelay = r1;
  emitter.clock = cl;
  emitter.addAction(new Age(56));
  emitter.addAction(new DeathLife());
  emitter.addAction(new Move(7));

  const ser = new StardustSerializer();
  const str = ser.serializeEmitter(emitter);
  const newEm: Emitter = ser.deserializeEmitter(str);
  const dc = 34;
  debugger
  return (
      <div>hello</div>
  );
}
export default App;
