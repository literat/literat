#!/usr/bin/env node

import fs from 'fs-extra';
import chalk from 'chalk';
import inquirer from 'inquirer';

const init = () => {
  console.log(chalk.green('Create new post:'));
};

const askQuestions = () => {
  const questions = [
    {
      name: 'TITLE',
      type: 'input',
      message: 'Post title?',
    },
    {
      name: 'EXCERPT',
      type: 'input',
      message: 'Post excerpt?',
    },
    {
      name: 'CATEGORY',
      type: 'list',
      message: 'Post category? (choose one)',
      choices: ['development', 'whitewater', 'other'],
    },
    {
      name: 'TAGS',
      type: 'input',
      message: 'Post tags? (comma/space separated)',
    },
  ];

  return inquirer.prompt(questions);
};

const getCurrentDate = () => {
  const date = new Date();

  return date.toISOString().split('T')[0];
};

const normalizeTags = (tags) => tags.split(/[\s,]+/);

const createContent = ({ title, excerpt, date, category, tags }) => `---
title: ${title}
excerpt: '${excerpt}'
date: '${date}'
category:
  - ${category}
tags: [${normalizeTags(tags)
  .map((tag) => `'${tag}'`)
  .join(', ')}]
---`;

const createPost = async (options) => {
  const { date, title } = options;
  const postDirectory = 'src/posts';
  const postFile = `${postDirectory}/${date}-${title.replace(/\s/g, '-')}/index.mdx`;
  const content = createContent(options);

  await fs.outputFileSync(postFile, content);

  return postFile;
};

const success = (file) => console.log(chalk.white.bgGreen.bold(`Done! File created at ${file}`));

const run = async () => {
  // show script introduction
  init();

  // get current date
  const date = getCurrentDate();

  // ask questions
  const answers = await askQuestions();
  const { TITLE, EXCERPT, CATEGORY, TAGS } = answers;

  // create post
  const filename = await createPost({
    title: TITLE,
    excerpt: EXCERPT,
    category: CATEGORY,
    tags: TAGS,
    date,
  });

  // show success message
  success(filename);
};

run();
