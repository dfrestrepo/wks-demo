'use client'

import { CdsButton } from "@circutor/react-ui";
import { useRouter } from 'next/navigation'

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



    </section>
  );
}
