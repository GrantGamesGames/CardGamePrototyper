# CardGamePrototyper

[![Join the chat at https://gitter.im/astrism/CardGamePrototyper](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/astrism/CardGamePrototyper?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

CSV -> printable card game.

## What is this?

This tool takes in CSV take and generates a printable card game. Works in Chrome, Safari, Firefox as far as I know. I recommend Chrome as its handling of printing is the best.

## How do I use this?

Grab a CSV file, I use Google Spreadsheets to put mine together and most spreadsheet apps can export to csv. Your CSV can have any fields but the app only uses these:

* Name
* Quantity
* Hint
* Description

This is a basic Werewolf example which uses all the required fields listed above, and even has an extra field, Probability, that the app ignores.

| Name     | Quantity | Hint | Description                                                                             | Probability |
|----------|----------|------|-----------------------------------------------------------------------------------------|-------------|
| Seer     | 1        | S    | When instructed, pick one player and the moderator will tell you if they're a werewolf. | 14%         |
| Werewolf | 2        | W    | At nightfall open your eyes and pick a victim                                           | 29%         |
| Villager | 4        | V    | At daybreak try to find the werewolf                                                    |             |

<p>To recreate the doc above:</p>
* Open the [Google Docs Template](https://docs.google.com/spreadsheets/d/1W1_9gVEfpQlfFlWHbc9E0ZqS37XCZpAQnUs1sawd0gc/edit?usp=sharing)
* In Google Docs go to *File* -> *Make a copy...*
* Customise for your game
* To get the csv from Google Docs, use *File* -> *Download as* -> *Comma Separated Values (.csv, current sheet)*

Which would produce when exported:

```csv
Name,Quantity,Hint,Description,Probability
Seer,1,S,"When instructed, pick one player and the moderator will tell you if they're a werewolf.",14%
Werewolf,2,W,At nightfall open your eyes and pick a victim,29%
Villager,4,V,At daybreak try to find the werewolf,57%
```

Next paste that csv data into the app and press **Import Data**. This will convert the CSV to printable Poker Size (2.5" * 3.5") cards.

Now print! When printing I recommend Landscape, which fits the most poker size cards.

## Is this printer friendly?
Yes. We use css to hide the instructions. Just go file print in your browser. For best results print in landscape mode.

## How often will you be making updates to this tool?
We will be trying to update every two weeks with a rev. The tool is also open source so if your an awesome developer we welcome your support. 

## How do I get feature request in the builds?
Wow! You want a lot for nothing. No seriously. Thanks for the feedback. Post in the [issues tracker on GitHub](https://github.com/astrism/CardGamePrototyper/issues) or email team AT godhatesgames.com