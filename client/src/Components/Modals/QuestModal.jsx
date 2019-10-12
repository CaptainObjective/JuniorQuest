import React from 'react';
import { Modal, Button, Icon, Grid, Label } from 'semantic-ui-react';

const QuestModal = props => {
  return (
    <Modal open={props.isModalOpen} onClose={props.onClose} closeOnDimmerClick={false} closeIcon>
      <Modal.Header>{props.header}</Modal.Header>
      <Modal.Content scrolling>
        <Grid>
          <Grid.Row>
            <Grid.Column centered={true}>{props.children}</Grid.Column>
          </Grid.Row>
          <Grid.Row centered={true}>
            {props.finished ? (
              <Label>
                <Icon name="thumbs up" />
                Ukończone
              </Label>
            ) : (
              <Button inverted color="blue" positive onClick={props.onFinish}>
                Zakończ <Icon name="chevron right" />
              </Button>
            )}
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

QuestModal.defaultProps = {
  header: '',
  isModalOpen: false,
  finished: false,
};

export default QuestModal;
