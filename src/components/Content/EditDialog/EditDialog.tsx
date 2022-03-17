import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import EditDialogStyles from './EditDialogStyles';
import OutLink from '../../OutLink';

interface EditDialogProps {
  editUrl: string;
}

const EditDialog = ({ editUrl }: EditDialogProps): JSX.Element => (
  <EditDialogStyles>
    <p>Find an issue with this post? Think you could clarify, update or add something?</p>
    <p>All my posts are available to edit on Github. Any fix, little or small, is appreciated!</p>
    <p>
      <OutLink link={editUrl} title="Edit on Github">
        <IoLogoGithub /> Edit on Github
      </OutLink>
    </p>
  </EditDialogStyles>
);

export default EditDialog;
