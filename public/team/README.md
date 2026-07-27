# Team / talent photos

The "World-class talent for a borderless market" section on the home page
(`components/Talent.jsx`) loads photos from this folder.

## Add your photos

Save the headshots here with these exact filenames:

| File            | Role chip            |
| --------------- | -------------------- |
| `talent-1.jpg`  | Paid Media           |
| `talent-2.jpg`  | Growth Strategist    |
| `talent-3.jpg`  | Performance Creative |
| `talent-4.jpg`  | Data & Analytics     |

- Any web image format works — just keep the `.jpg` names above, or change the
  `src` values in `lib/site.js` (the `talent` array) to match your filenames.
- Roughly **portrait** crops look best (the frames use a 4:5 aspect ratio).
- Photos are shown in black & white and colour-up on hover — colour or B&W
  originals both work.

Until the files exist, each frame shows an elegant gradient + role initials, so
the section always looks complete.
