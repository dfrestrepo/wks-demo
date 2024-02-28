import { CdsButton } from "@circutor/react-ui";

import { Button } from 'antd';

import { EditInline } from "./components/EditInline";



export default function Home() {



  return (
    <section>
      <h1>Title</h1>
      <p>Lorem alog</p>

      <h4>Con el react cds button</h4>
      <CdsButton
        type="submit"
        buttonType="secondary"
        icon="chat-bubble-plus"
        iconPosition="left"
        loading
      >
        Button
      </CdsButton>
      <CdsButton
        type="submit"
        buttonType="secondary"
        icon="chat-bubble-plus"
        iconPosition="left"
        loading
      >
      </CdsButton>


<h2>Antd</h2>
<p></p>

      <Button type="primary">Button</Button>

      <EditInline text="algo" />
      
    </section>
  );
}
