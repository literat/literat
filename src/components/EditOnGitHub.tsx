import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import OutLink from './OutLink';

interface EditOnGitHubProps {
  editUrl: string;
}

function EditOnGitHub({ editUrl }: EditOnGitHubProps) {
  return (
    <OutLink link={editUrl} title="Edit on GitHub">
      <IoLogoGithub /> Edit on GitHub
    </OutLink>
  );
}

export default EditOnGitHub;
