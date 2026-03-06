import { redirect } from "next/navigation";

export default function Page() {
  redirect("/docs/typography");
}

// import styles from './page.module.css'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.tsx</code>
//         </p>

//         <a href="/docs/form/input" className={styles.card}>
//           <h2>home <span>-&gt;</span></h2>
//         </a>
//       </div>
//     </main>
//   )
// }
