import { View, StyleSheet, ScrollView} from 'react-native';

import Title from './components/title/index';
import Ad from './components/ad/index';

function App() {
  return (
    <View style={styles.container}>
      <Title />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Ad
          adTitle={'Mochila Essencial'}
          imgPath={
            'https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_shock_matelasse_cinza_7011_1_2e01bb2707da32f4832791271694fa24.jpg'
          }
          content={
            'Uma mochila básica e funcional, ideal para transportar seus pertences com conforto e segurança. Possui múltiplos compartimentos internos para organização.'
          }></Ad>
        <Ad
          adTitle={'Notebook'}
          imgPath={
            'https://lojamultilaser.vtexassets.com/arquivos/ids/1502078-800-auto?v=638907701949070000&width=800&height=auto&aspect=true'
          }
          content={
            'Computador portátil potente para tarefas cotidianas, estudo e trabalho. Desempenho confiável e tela de boa qualidade. Essencial para a sua produtividade.'
          }></Ad>
        <Ad
          adTitle={'Boneca Clássica'}
          imgPath={
            'https://superlegalbrinquedos.vtexassets.com/arquivos/ids/191543/1001002200022-Boneca-Classica-Moranguinho-Estrela-1.jpg?v=637587566935500000'
          }
          content={
            'Boneca de brinquedo tradicional com acessórios e roupas simples. Excelente para o desenvolvimento da imaginação e para horas de diversão criativa.'
          }></Ad>
        <Ad
          adTitle={'Kit de Facas'}
          imgPath={
            'https://cdn.awsli.com.br/2500x2500/2657/2657296/produto/264021714/kit-facas-inox-6-pcs-ultracorte-tramontina-23899060-5a70ea65-03890yy0s0.jpg'
          }
          content={
            'Conjunto de facas básicas e essenciais para a preparação de alimentos. Lâminas resistentes e cabos ergonômicos para um corte fácil e seguro.'
          }></Ad>
        <Ad
          adTitle={'Calça Jeans'}
          imgPath={
            'https://d3vnyi5j6ba1mc.cloudfront.net/Custom/Content/Products/16/20/1620378_calca-jeans-feminina-cropped-24607009_l1_638270785930917359.webp'
          }
          content={
            'Calça jeans de corte reto, confortável e durável. Peça versátil e essencial para qualquer guarda-roupa, ideal para diversas ocasiões casuais.'
          }></Ad>
      </ScrollView>
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
