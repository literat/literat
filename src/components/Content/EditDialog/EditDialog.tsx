import React from 'react';
import EditDialogStyles from './EditDialogStyles';
import EditOnGitHub from '../../EditOnGitHub';

interface EditDialogProps {
  editUrl: string;
}

const EditDialog = ({ editUrl }: EditDialogProps): JSX.Element => (
  <EditDialogStyles>
    <p>Find an issue with this post? Think you could clarify, update or add something?</p>
    <p>All my posts are available to edit on Github. Any fix, little or small, is appreciated!</p>
    <p>
      <EditOnGitHub editUrl={editUrl} />
    </p>
  </EditDialogStyles>
);

export default EditDialog;
