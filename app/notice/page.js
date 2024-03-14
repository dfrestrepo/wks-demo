'use client'

import {CdsNotice, CdsButton } from "@circutor/react-ui";

export default function Page() {
  return (
    <>
    <CdsNotice text="some text minimun use" />

    <CdsNotice icon='cds-ico-floppydisk' text='pleceholder text' />

        <CdsNotice icon='cds-ico-chat-bubble-dots' title='Workspace' text='See and solve your building problems in one place. Include your team members and generate customised graphics.'/>
        
        <CdsNotice icon='cds-ico-chat-bubble-dots' title='Workspace' text='See and solve your building problems in one place. Include your team members and generate customised graphics.'>
          <CdsButton buttonType="primary" icon='floppydisk' onClick={() => setCount(count+1)}>Click me!</CdsButton>
        </CdsNotice>

        <CdsNotice feedback='error' icon='cds-ico-close-circle-solid' hero='403' title='Server error' text='no puedes entrar aqui'/>
        </>
  );
}
