import { EventEmitter } from 'events';

export function logListeners(emitter, eventName) {
  const listeners = emitter.listeners(eventName);
  console.log(`Number of listeners for ${eventName}:`, listeners.length);
  listeners.forEach((listener, index) => {
    console.log(`Listener ${index + 1}:`, listener.toString());
  });
}
