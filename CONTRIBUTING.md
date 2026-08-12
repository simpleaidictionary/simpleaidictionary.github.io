# Contribute!

There's a variety of ways you can contribute to the dictionary!

## Word of the Day

If you want to suggest a word of the day, simply open up a pull request with an edit to: `lib/term_of_the_day.ts`!

## Add a New Term

If you want to add a new term to the dictionary, open up an issue with the term in the title, and your suggested "General" and "Software" definition in the body of the issue.

Example Issue:

```yml
----------------------------------------
| New Term: Vibe-coding                |
|--------------------------------------|
|                                      |
| General definition: ....             |
|                                      |
| Software definition: ...             |
|                                      |
|--------------------------------------|
```

This will help us open up the floor for discussion, before making a pull request.

### Making a Pull Request for a New Term

When you make a pull request for a new term, you only need to add/edit 2 files:

1. `lib/terms.ts`, to add your term definition. Here, make a new variable with the name of your term, with spaces substituted for underscores. Then, use the `term` interface to construct your term definition. Finally, add your new variable to the `terms` array. This is the array that is used to make the dictionary.

2. `public/mermaid_diagrams`, to add your term diagrams. Add the `_general` and `_software` suffixes for respective definition types.

And that's it! Should be straightforward.

## Other Stuff

Just open up an issue with any other suggestions!
