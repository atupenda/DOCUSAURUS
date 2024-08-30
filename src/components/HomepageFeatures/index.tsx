import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  
   // title: 'Easy to Use',
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    //description: (
     // <>
       // Docusaurus was designed from the ground up to be easily installed and
       // used to get your website up and running quickly.
    //
  //{
   // title: 'my afya msafiri',
   // Svg: require('@site/static/img/logo.svg').default,
   // description: (
      //<>
      //  user guide for electronic screening of travelers and public health events at points of entry<code>docs</code> directory.
     // </>
    //),
//},

  {
    title: ' My Afya Msafiri',
    Svg: require('@site/static/img/logo.svg').default,
    description:(
    
      <>
       Extend or customize your website layout by reusing React. Docusaurus can
      be extended while reusing the same header and footer.
     </>
),
},
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={styles.feature}>
      
        <Svg className={styles.featureSvg} role=" img" />
        <h1 className={styles.title}>{title}</h1>
        <p>className={styles.description}{description}</p>
      </div>
  
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
     {FeatureList.map((props, idx) => (
    <Feature key={idx} {...props} />
         
       ))}
        
      
    </section>
  );
}
