'use client'
import Image from 'next/image'
import styles from './page.module.css'
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  display: block;
`;

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Button></Button>
      </div>
    </main>
  )
}
