import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import ProductCard from '../products/ProductCard';

class LaneparkCollections extends Component {
  
  filterProductsByCat(catSlug) {
    const { categories, products } = this.props;
    const cat = categories.find(category => category.slug === catSlug);
    if (!cat) return [];
    return products.filter(product => product.categories.find(productCategory => productCategory.id === cat.id));
  }

  renderCollections() {
    const { categories } = this.props;

    return categories.map(category => (
      <div key={category.id} className="lanepark-collection">
        <h2 id={category.slug}>{category.name}</h2>
        <div className="lanepark-product-grid">
          {this.filterProductsByCat(category.slug).map(product => (
            <ProductCard
              key={product.id}
              permalink={product.permalink}
              image={product.media.source}
              name={product.name}
              price={product.price.formatted_with_symbol}
            />
          ))}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="lanepark-collections">
        <Head>
          <title>Collections | Lanepark</title>
        </Head>
        <div className="lanepark-content">
          {this.renderCollections()}
        </div>
      </div>
    );
  }
}

export default connect(state => state)(LaneparkCollections);
