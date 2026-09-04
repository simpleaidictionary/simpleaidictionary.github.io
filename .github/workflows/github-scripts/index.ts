import { Octokit } from "octokit";
import type * as githubTypes from "@actions/github";

declare const github: Octokit;
declare const context: typeof githubTypes.context;

await github.rest.issues.createComment({
  issue_number: context.issue.number,
  owner: context.repo.owner,
  repo: context.repo.repo,
  body: "body...",
});
