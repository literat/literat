---
path: "/renovate-your-dependencies"
date: "2021-03-05"
title: "Renovate Your Dependencies"
tags: ["renovate", "dependencies", "security", "vulnerabilities"]
excerpt: "Talk about how to stay up to date with your dependencies"
---

I have been talking about dependencies for [Frontendisti.cz]() and here is what it was about.

One day I notice in my Inbox a commit and pull-request from one of my GitHub repo.
It was something new because it was from machine known as [Dependabot]() and entire issue was about updating
known security vulnerability. "Hey, that`s so cool! I want this on any of my active projects!"

By that time we had security checks in [LMC]() for [Symfony](). But they only reported into Slack channel
 when some new vunerability appears. Next step had to be taken by human. You know, creating of issue, new branch
 fix the vulnerability, create pull-request, wait for code review a than merge it and release. So much of repetitive work.

- <https://github.com/FriendsOfPHP/security-advisories>
- <https://github.com/fabpot/local-php-security-checker>

## Finding vulnerabilities

I want to have something similar what does [Dependabot]() in [LMC](). So I tried to solve this kind of problem.

First of all we started using `npm audit` and `npm outdated`. Do you know them? NPM or Yarn can audit your dependencies
for you and print a very very very long report if found something. On the other hand `outdated` command can found dependencies
which are old (have new version of them) and can be updated.

@TODO: links to commands in documentation

First run on our project was catastrophe. Both commands found too much vulnerabilities and updates to be done by human being.

@TODO: gif with npm audit

## The Great Research

At LMC we have private cloud for our products. So every piece of project we are running ourselves.
We use very few third party services for sustainability and security reasons. So the solution for
dependencies vulnerabilities must also on-premise.

We also need same features as Dependabot has:

- separate branches and pull-requests for each security vulnerability
- automated updates of dependencies

At this point Google comes to help and I started to search for possible solutions. Soon some answers come to light.

| Product | branches | PRs | on-premise | pricing |
| ------- | -------- | --- | ---------- | ------- |
| [Dependabot](https://dependabot.com/) | ✅ | ✅ | 🚫 | free |
| [GreenKeeper](https://greenkeeper.io/) | ✅ | ✅ | 🚫 | free |
| [Snyk](https://snyk.io/) | ✅ | ✅ | ❓ | 💵 |
| [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate/) | ✅ | ✅ | ✅ | free |

Note:

- Dependabot runs on GitHub repos only.
- GreenKeeper was bought by Snyk.
- All products are SaaS.
- Snyk provides on-premise solution by his Enterprise pricing plan.
- Renovate provide CLI for free.

## Renovate Your Rependencies

- <https://www.whitesourcesoftware.com/free-developer-tools/renovate/>
- <https://www.whitesourcesoftware.com/free-developer-tools/renovate/on-premises>
- <https://github.com/renovatebot/renovate>

Renovate is CLI tool written in Javascript and there is also npm package and docker image provided.
It is best suited for our needs. Configuration is simple and straightforward. And after first run it
prepare onboarding pull-request to provided repository with needed configuration file for project.

In configuration file you can then configure every possible rule you need. From branch name, branch prefix, commit to miscellaneous definitions of package groups and rules for these groups.

## Noise Reduction

With Renovate bot up and running started real mess that we do not expected. As we have every hickup of our repository in bitbucket tied up to our Slack and mail our channels begun to fill with spam. Every newly created pull-request and commit appeared in our mail and Slack. And also did nto mention automated tests started and notifications from them.

@TODO: image of slack

We started to work on this issue and reduce this type of noise.

First step was to use package grouping. For exmaple we took `eslint-*` packages and created `eslint` group. Renovate then updated all packages within this pattern in one pull-request. That helped a lot with noise reduction but increase difficulty of finding a corrupted package if something in this pull-request breaks our builds.

Second step to reduce noise was working with time. We planned in time when this hell should begin. So we picked one day in week when renovate can emit updates and rest of the days we are living in peace. We set this to Monday so we have entire week to deal with updates.

Another step to reduce all the mess was to use automerging. Definitely the best feature. But use it with caution. This feature requires very well setup up CI pipeline. Because you do not want to break your application with some bad package update. For now we are automerging only patch and minor changes in packages. And of course our CI pipeline test every build.

After a while this renovation stabilized. Of course we set also limit for 10 concurrent pull-requests with updates per repository. Because major updates we must still handle manually and we did not want to have too much open pull-requests.

## Resume

So what we gained?

- we have on-premise solution for updating packages
- we have fully automated solution for package updates
- we have up-to-date dependencies
- we have also overview about updates in packages we use
- and of course we have significantly less security vulnerabilities

And what about vulnerability alerting?

We created a jenkins job with simple `npm audit` and we are sending result to our Slack channel. 🎉

<https://docs.renovatebot.com/noise-reduction/>

<https://docs.renovatebot.com/configuration-options/#vulnerabilityalerts>

<https://share.getcloudapp.com/z8uPgJ07>

<https://www.rarous.net/weblog/2018/09/28/jak-jsme-dali-praci-robotum.html>

<https://github.com/fabpot/local-php-security-checker>
<https://github.com/FriendsOfPHP/security-advisories>
<https://classic.yarnpkg.com/en/docs/cli/audit/>
<https://github.com/djfdyuruiry/improved-yarn-audit>
<https://dev.to/antongolub/yarn-audit-fix-workaround-i2a>
<https://github.com/davityavryan/yarn-audit-html>
<https://github.com/IBM/audit-ci>
