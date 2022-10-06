import { writable } from 'svelte/store';

export const user = writable({
  name: "Thrum Windsock",
  phone: "972393003",
  email: "thrum@gmail.com"
})