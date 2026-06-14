# DECEIVED — Audio Tracks

The game looks for **six music files** in this `audio/` folder. Drop them in with the
**exact filenames** below. If a file is missing, that level just falls back to the
built-in synth drone — nothing breaks — so you can add them one at a time.

| Filename            | Where it plays            | Vibe to look for                                  |
|---------------------|---------------------------|---------------------------------------------------|
| `theme-menu.mp3`    | Home / menu screen        | Cool, watchful, low pulse. "Lie detector idling." |
| `theme-level1.mp3`  | Level 1 — The Rookie      | Light unease. Curious, not yet scary.             |
| `theme-level2.mp3`  | Level 2 — The Investigator| Growing tension. A touch of dread.                |
| `theme-level3.mp3`  | Level 3 — The Detective   | Cold, methodical, noir interrogation room.        |
| `theme-level4.mp3`  | Level 4 — The Profiler    | Predatory, clinical, getting under your skin.     |
| `theme-level5.mp3`  | Level 5 — The Interrogator| Full Twilight-Zone dread. Smiling-liar menace.    |

(Daily uses the Level 3 theme; Quick Timed uses Level 5; Local VS uses Level 4.)

## Where to get royalty-free tracks (no attribution headaches)

**Pixabay Music** — https://pixabay.com/music/  (free, no attribution required — easiest)
Search: `dark ambient`, `suspense tension`, `horror underscore`, `interrogation`,
`ominous drone`, `creepy heartbeat`.

**Freesound** — https://freesound.org/  (filter license to **Creative Commons 0**)
Great for loopable ambient beds and one-shots.

**Incompetech (Kevin MacLeod)** — https://incompetech.com/music/royalty-free/
Browse the **Horror** and **Suspense** categories. Attribution required but simple
(one credit line in your README or About screen).

## How to add them

1. Download each track as `.mp3`.
2. Rename it to the exact filename in the table above.
3. Put all six in this `audio/` folder.
4. Commit the `audio/` folder to your GitHub repo (same level as `index.html`).
5. Hard-refresh the site (Ctrl/Cmd+Shift+R).

## Tips

- **Loopable tracks** sound best (they repeat seamlessly under gameplay). Pixabay
  often labels these "loop."
- Keep files reasonably small (1–3 MB each) so the page loads fast. A 1–2 minute
  loop at 128 kbps is plenty.
- Volume is balanced in code per track; if one feels too loud/quiet, tell me and
  I'll tweak its `vol` value in the `MUSIC` config inside `index.html`.
- Sound effects (clicks, lock-in, correct/wrong stings, level-up) are all
  synthesized in-browser — you don't need files for those.
