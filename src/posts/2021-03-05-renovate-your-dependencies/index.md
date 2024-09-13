---
title: 'Renovate Your Dependencies'
date: '2021-03-05'
category:
  - Development
tags: ['renovate', 'dependencies', 'security', 'vulnerabilities']
excerpt: 'Talk about how to stay up to date with your dependencies'
---

I have been talking about dependencies for [Frontendisti.cz][frontendisti] and here is what it was about.

One day I notice in my Inbox a commit and pull-request from one of my GitHub repo.
It was something new because it was from a machine known as [Dependabot][dependabot] and the entire issue was about updating
known security vulnerability. "Hey, that’s so cool! I want this on any of my active projects!"

![security alert](./github-dependabot.png 'Security alert from dependabot')

By that time we had [security checks](https://github.com/FriendsOfPHP/security-advisories) in [LMC][lmc] for [Symfony framework][symfony]. But they only reported into the Slack channel
when some new vulnerability appears. The next step had to be taken by a human. You know, creating of issue, new branch
fix the vulnerability, create pull-request, wait for code review a then merge it and release. It involves a lot of repetitive work.

## Finding vulnerabilities

I want to have something similar what does [Dependabot][dependabot] in [LMC][lmc]. Consequently, I tried to solve this kind of problem.

First of all we started using `npm audit` and `npm outdated`. Do you know them? [Npm][npm-audit] or [Yarn][yarn-audit] can audit your dependencies
for you and print a very long report if found something. On the other hand `outdated` command can found dependencies
which are old (have a new version of them) and can be updated.

The first run on our project was a catastrophe.

![yarn audit](./audit.gif 'Running audit on our project')

Both commands found too many vulnerabilities and updates to be done by a human being.

![yarn audit result](./audit-result.png 'Result of audit on our project')

## The Great Research

At LMC we have a private cloud for our products, meaning every piece of a project we are running ourselves.
We use very few third-party services for sustainability and security reasons. So the solution for
dependencies vulnerabilities must also on-premise.

We also need the same features as Dependabot has:

- separate branches and pull requests for each security vulnerability
- automated updates of dependencies

At this point Google comes to help and I started to search for possible solutions. Soon some answers come to light.

| Product                    | branches | PRs | on-premise | pricing |
| -------------------------- | -------- | --- | ---------- | ------- |
| [Dependabot][dependabot]   | ✅       | ✅  | 🚫         | free    |
| [GreenKeeper][greenkeeper] | ✅       | ✅  | 🚫         | free    |
| [Snyk][snyk]               | ✅       | ✅  | ❓         | 💵      |
| [Renovate][renovate]       | ✅       | ✅  | ✅         | free    |

Note:

- Dependabot runs on GitHub repos only.
- GreenKeeper was bought by Snyk.
- All products are SaaS.
- Snyk provide an on-premise solution by his Enterprise pricing plan.
- Renovate provide CLI for free.

## Renovate Your Dependencies

[Renovate][renovate] is command line tool written in JavaScript and there is also npm package and docker image provided.
It is best suited for our needs. Configuration is simple and straightforward. And after the first run it
prepare onboarding pull-request to a provided repository with the needed configuration file for a project.

In the [configuration file][renovate-configuration] you can then configure every possible rule you need. From branch name, branch prefix, commit to miscellaneous definitions of package groups and rules for these groups.

## Noise Reduction

With Renovate bot up and running started a real mess that we do not expect. As we have every hiccup of our repository in bitbucket tied up to our Slack and mail our channels have begun to fill with spam. Every newly created pull request and commit appeared in our mail and Slack. And also did not mention automated tests started and notifications from them.

![Noise in Slack](slack-noise-3.png 'Noise in Slack')

We started to work on this issue and [reduce this type of noise][renovate-noise-reduction].

The first step was to use package grouping. For example we took `eslint-*` packages and created `eslint` group. Renovate then updated all packages within this pattern in one pull request. That helped a lot with noise reduction but increase the difficulty of finding a corrupted package if something in this pull request breaks our builds.

The second step to reduce noise was working with time. We planned in time when this hell should begin. We picked one day in a week when renovate can emit updates and rest of the days we are living in peace. We set this to Monday so we have an entire week to deal with updates.

Another step to reduce all the mess was to use automerging. Definitely the best feature. But use it with caution. This feature requires a very well setup up CI pipeline. Because you do not want to break your application with some bad package update. For now we are automerging only patch and minor changes in packages. And of course our CI pipeline test every build.

After a while this renovation stabilized. Of course we set also a limit for 10 concurrent pull requests with updates per repository. Because of major updates which we must still handle manually and we did not want to have too much open pull requests.

## Resume

What have we gained?

- we have an on-premise solution for updating packages
- we have a fully automated solution for package updates
- we have up-to-date dependencies
- we have also overview of updates in packages we use
- and of course we have significantly fewer security vulnerabilities

And what about vulnerability alerting?

We created a Jenkins job with a simple `npm audit` and we are sending the result to our Slack channel. 🎉

## Resources

- [Noise reduction in Renovate Docs][renovate-noise-reduction]
- [Vulnerability alerting by Renovate (GitHub only feature)][renovate-vulnerability-alerts]
- [Rarouš: Jak jsme dali práci robotům (Czech only)][rarous-prace-robotum]
- [Local PHP security checker][github-php-security-checker]
- [Improved Yarn audit][github-improved-yarn-audit]
- [Yarn audit fix workaround][dev-yarn-audit-fix]
- [Yarn audit html report][github-yarn-audit-html]
- [IBM’s audit ci][ibm-audit-ci]
- [Renovate: On Premise][renovate-on-premises]
- [Renovate on GitHub][github-renovate]
- [Renovate Your Dependencies slides][frontendisti-slides]

[frontendisti]: https://frontendisti.cz/
[dependabot]: https://dependabot.com/
[lmc]: https://www.lmc.eu/
[symfony]: https://symfony.com/
[npm-audit]: https://docs.npmjs.com/cli/v7/commands/npm-audit
[yarn-audit]: https://classic.yarnpkg.com/en/docs/cli/audit/
[greenkeeper]: https://greenkeeper.io/
[snyk]: https://snyk.io/
[renovate]: https://www.whitesourcesoftware.com/free-developer-tools/renovate/
[renovate-configuration]: https://docs.renovatebot.com/configuration-options/
[renovate-noise-reduction]: https://docs.renovatebot.com/noise-reduction/
[renovate-vulnerability-alerts]: https://docs.renovatebot.com/configuration-options/#vulnerabilityalerts
[rarous-prace-robotum]: https://www.rarous.net/weblog/2018/09/28/jak-jsme-dali-praci-robotum.html
[github-php-security-checker]: https://github.com/fabpot/local-php-security-checker
[github-improved-yarn-audit]: https://github.com/djfdyuruiry/improved-yarn-audit
[dev-yarn-audit-fix]: https://dev.to/antongolub/yarn-audit-fix-workaround-i2a
[github-yarn-audit-html]: https://github.com/davityavryan/yarn-audit-html
[ibm-audit-ci]: https://github.com/IBM/audit-ci
[renovate-on-premises]: https://www.whitesourcesoftware.com/free-developer-tools/renovate/on-premises
[github-renovate]: https://github.com/renovatebot/renovate
[frontendisti-slides]: https://frontendisti-renovate-your-dependencies.netlify.app/
