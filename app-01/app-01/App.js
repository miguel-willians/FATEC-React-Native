import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';


export default function App() {
  return (
    <View>
      <Text
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 14,
          fontSize: 24,
          fontWeight: 800,
        }}>
        Meu Perfil Profissional
      </Text>

      <Image
        source={require('./assets/perfil.jpg')}
        style={{
          width: 300,
          height: 300,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      <Text
        style={{
          marginTop: 8,
          marginBottom: 8,
          fontSize: 18,
          fontWeight: 600,
        }}>
        Dados Pessoais:
      </Text>

      <Text>
        Github: https://github.com/miguel-willians | LinkedIn:
        https://www.linkedin.com/in/miguel-willians-176442266/ | E-mail:
        miiguel.wso@gmail.com | Contato: (13)988666160
      </Text>

      <Text
        style={{
          marginTop: 8,
          marginBottom: 8,
          fontSize: 18,
          fontWeight: 600,
        }}>
        Formação:
      </Text>

      <Text style={{ fontWeight: 500, marginBottom: 4 }}>
        FATEC Rubens Lara
      </Text>
      <Text>
        Sistemas para Internet – Início: Fevereiro de 2023 - Em curso (2800
        horas totais)
      </Text>

      <Text style={{ fontWeight: 500, marginBottom: 4 }}>Udemy </Text>
      <Text>
        The Ultimate React Course: React, Next.js, Redux & more (84 horas
        totais)
      </Text>

      <Text
        style={{
          marginTop: 8,
          marginBottom: 8,
          fontSize: 18,
          fontWeight: 600,
        }}>
        Experiência:
      </Text>

      <Text style={{ fontWeight: 500, marginBottom: 4 }}>
        Upbase - Consultoria em Tecnologia e Recusos Humanos
      </Text>

      <Text>
        Estagiário Front-End – Atuação no desenvolvimento e manutenção de
        aplicações web utilizando React, Next.js e TypeScript, com estilização
        em Tailwind CSS. Experiência com controle de versão via Git e
        gerenciamento de repositórios no Azure DevOps. Participação em reuniões
        com stakeholders para entendimento do fluxo do projeto e definição de
        requisitos das interfaces, além de vivência prática em metodologias
        ágeis (Scrum e Kanban), colaborando em sprints, reviews e reuniões de
        acompanhamento.
      </Text>

      <Text
        style={{
          marginTop: 8,
          marginBottom: 8,
          fontSize: 18,
          fontWeight: 600,
        }}>
        Projetos:
      </Text>

      <Text>
        The Wild Oasis Management: Aplicação web desenvolvida para gerenciar
        operações de hospedagem em cabanas de um hotel em ambientes desktop. Seu
        front-end foi construído utilizando React, com auxílio de React Router
        para navegação, React Query para gerenciamento de estado remoto, Context
        API para controle de estado global e Styled Components para estilização.
        O back-end foi desenvolvido com Supabase, utilizando PostgreSQL como
        banco de dados. O sistema permite a gestão completa de cabanas, reservas
        e check-ins/check-outs, além de oferecer um dashboard com métricas
        detalhadas sobre o desempenho do hotel.
      </Text>
      <Text>
        Worldwise: Meu primeiro projeto fullstack, Worldwise é uma Single Page
        Application para ambientes desktop. Seu front-end foi construído a
        partir do React com auxílio de React Router, ContextAPI e CSS Modules
        para estilização. Já seu back-end foi construído a partir do Spring Boot
        com integração ao banco de dados PostgreSQL.
      </Text>

      <Text>
        Fast React Pizza V2: Uma versão atualizada do meu primeiro projeto feito
        em React, com auxílio de bibliotecas e frameworks como o React Router, o
        Redux e o TailwindCSS para estilização.
      </Text>
    </View>
  );
}
