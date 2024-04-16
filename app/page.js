'use client'

import { CdsButton } from "@circutor/react-ui";
import { useRouter } from 'next/navigation';
import {ListDemo} from './components/ListDemo';



const dataToDisplayminim = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
];
const dataToDisplayflat = [
  {
    title: "Title 1",
    value: "Value 1",
  },
  {
    title: "Title 2",
    value: "Value 2",
  },
];

const dataToDisplayValue = [
  {
    title: "Title 1",
    subtitle: "Subtitle 1",
    value: "Value 1",
  },
  {
    title: "Title 2",
    subtitle: "Subtitle 2",
    value: "Value 2",
  },
];

const dataToDisplayAction = [
  {
    title: "Title 1",
    subtitle: "Subtitle 1",
    avatarIcon: "cds-ico-device",
    iconAction: "cds-ico-edit",
    actionClick: () => console.log("Click on action 1"),
  },
  {
    title: "Title 2",
    subtitle: "Subtitle 2",
    avatarIcon: "cds-ico-device",
    iconAction: "cds-ico-edit",
    actionClick: () => console.log("Click on action 2"),
  },
];



export default function Home() {

  const router = useRouter();

  return (
    <section>
      
      <h4>Con el react cds button</h4>
      <CdsButton
        type="submit"
        buttonType="secondary"
        icon="chat-bubble-plus"
        iconPosition="left"
      >
        example label
      </CdsButton>

      with icon left and loader
      <CdsButton
        type="submit"
        buttonType="secondary"
        icon="chat-bubble-plus"
        iconPosition="left"
        loading
      >
      </CdsButton>
      
      
      <CdsButton
        type="submit"
        buttonType="ghost"
        icon="arrow-right"
        iconPosition="right"
        onClick={() => router.push('/alarms')}
      >
        Go to alarms demo
      </CdsButton>
      
      <CdsButton
        type="submit"
        buttonType="ghost"
        icon="arrow-right"
        iconPosition="right"
        onClick={() => router.push('/notice')}
      >
        Go to notice demo
      </CdsButton>

      <CdsButton
        type="submit"
        buttonType="ghost"
        icon="arrow-right"
        iconPosition="right"
        onClick={() => router.push('/nav')}
      >
        Go to nav demo
      </CdsButton>
      
      <CdsButton
        type="submit"
        buttonType="ghost"
        icon="arrow-right"
        iconPosition="right"
        onClick={() => router.push('/home')}
      >
        Go to home card demo
      </CdsButton>
{/* 
      <h4>Minimos</h4>
      <ListDemo data={dataToDisplayminim} showTrailing={false}></ListDemo>
      
      <h4>Flat, solo titulo y valor</h4>
      <ListDemo data={dataToDisplayflat}></ListDemo>
      
      <h4>subtitulo y valor</h4>
      <ListDemo data={dataToDisplayValue}></ListDemo>

      <h4>full con avatar y acción</h4>
      <ListDemo data={dataToDisplayAction}></ListDemo> */}


    </section>
  );
}
