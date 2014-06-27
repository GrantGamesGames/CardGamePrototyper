# CardGamePrototyper

CSV -> printable card game.

## What is this?

This tool takes in CSV take and generates a printable card game. Works in Chrome, Safari, Firefox as far as I know. I recommend Chrome as its handling of printing is the best.

## Thanks for this free tool, how do I complain?

This tool is pretty new, so don't expect much, but if you run in to any problems please report them on [GitHub Issues](https://github.com/astrism/CardGamePrototyper/issues)!

## How do I use this?

Grab a CSV file, I use Google Spreadsheets to put mine together and most spreadsheet apps can export to csv. Your CSV can have any fields but the app only uses these:

* Name
* Quantity
* Hint
* Description

Here is an example:

| Name     	| Quantity 	| Hint 	| Description                                                                             	|
|----------	|----------	|------	|-----------------------------------------------------------------------------------------	|
| Seer     	| 1        	| S    	| When instructed, pick one player and the moderator will tell you if they're a werewolf. 	|
| Werewolf 	| 2        	| W    	| At nightfall open your eyes and pick a victim                                           	|
| Villager 	| 4        	| V    	| At daybreak try to find the werewolf                                                    	|

Which would produce when exported:

```csv
Name,Quantity,Hint,Description
Seer,1,S,"When instructed, pick one player and the moderator will tell you if they're a werewolf."
Werewolf,2,W,At nightfall open your eyes and pick a victim
Villager,4,V,At daybreak try to find the werewolf
```

Next paste that csv data into the app and press **Import Data**. This will convert the CSV to printable Poker Size (2.5" * 3.5") cards.

Now print! When printing I recommend Landscape, which fits the most poker size cards.


