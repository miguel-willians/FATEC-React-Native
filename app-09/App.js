import { View, StyleSheet, FlatList } from 'react-native';
import React, { Component, useState } from 'react';

import Title from './components/title/index';
import Ad from './components/ad/index';

function App() {
  let initial_feed = [
    {
      positionTitle: 'Analista de Suporte Técnico Júnior',
      wage: 'R$ 2.500,00 - R$ 3.500,00',
      description:
        'Prestar suporte **nível 1 e 2** a usuários internos, resolvendo problemas de hardware, software e redes. Conhecimento em sistemas operacionais **Windows** e pacote **Office**. Trabalho presencial.',
      contact: 'www.techjobs.com.br/suporte',
    },
    {
      positionTitle: 'Desenvolvedor(a) Back-end Pleno',
      wage: 'R$ 6.000,00 - R$ 8.500,00',
      description:
        'Atuar no desenvolvimento e manutenção de APIs e serviços **RESTful** utilizando **Python** ou **Java**. Experiência com bancos de dados **PostgreSQL** ou **MySQL** e metodologias **Ágeis** (Scrum).',
      contact: 'carreiras@globalsys.dev',
    },
    {
      positionTitle: 'Engenheiro(a) de Dados Sênior',
      wage: 'R$ 10.000,00 - R$ 14.000,00',
      description:
        'Projetar, construir e otimizar pipelines de dados **ETL/ELT** em ambientes **Cloud (AWS/Azure)**. Proficiência em **SQL** e experiência com ferramentas como **Spark** ou **Airflow**. Experiência comprovada.',
      contact: '(11) 96534-7449',
    },
    {
      positionTitle: 'Analista de Segurança da Informação',
      wage: 'R$ 5.500,00 - R$ 7.500,00',
      description:
        'Responsável por monitorar eventos de segurança, realizar **análises de vulnerabilidade** e implementar políticas de **firewall** e **VPN**. Conhecimento em **LGPD** é um diferencial.',
      contact: 'seguranca@cybercorp.net',
    },
    {
      positionTitle: 'Gerente de Projetos de TI (PMO)',
      wage: 'R$ 8.000,00 - R$ 11.000,00',
      description:
        'Coordenar e gerenciar o ciclo de vida completo de projetos de software e infraestrutura. Certificação **PMP** ou **Scrum Master** desejável. Forte habilidade em comunicação e gestão de *stakeholders*.',
      contact: 'rh@inovati.com.br',
    },
  ];

  const [feed, setFeed] = useState(initial_feed);

  return (
    <View style={styles.container}>
      <Title />
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Ad data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 0,
    margin: 0,
  },
});

export default App;
