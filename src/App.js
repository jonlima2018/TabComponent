import React from 'react';
import { Tab, Tabs } from './components';
import './index.css';

function App() {

    const Content = ({title, content}) => {
        return(
            <div>
                <h1 className={'title'}>{title}</h1>
                <p className={'content'}>{content}</p>
            </div>
        );
    }

  return (
    <div className="App">
        <Tabs
            active={'1'}
        >
            <Tab
                id={'1'}
                title={'Titulo 1'}
            >
                <Content
                    title={'Lero Lero 1'}
                    content={'O incentivo ao avanço tecnológico, assim como a competitividade nas transações comerciais talvez venha a ressaltar a relatividade do sistema de participação geral.'}
                />
            </Tab>
            <Tab
                id={'2'}
                title={'Título 2'}
            >
                <Content
                    title={'Lero Lero 2'}
                    content={'Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação afeta positivamente a correta previsão do sistema de participação geral.'}
                />
            </Tab>
        </Tabs>
    </div>
  );
}

export default App;
