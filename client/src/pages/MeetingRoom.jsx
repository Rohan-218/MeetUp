import React from 'react';
import { useParams } from 'react-router-dom';

const MeetingRoom = () => {

  const {meetingId} = useParams();

  return (
    <div>MeetingRoom</div>
  );
};

export default MeetingRoom;