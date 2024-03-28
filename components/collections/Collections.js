import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import ProductCard from '../products/ProductCard';
import { ErrorBoundary } from '../errorBoundary';

class LaneparkCollections extends Component {

  // Assuming categories and products are always arrays; otherwise, set default values
  filterProductsByCat(catSlug) {
    const { categories = [], products = [] } = this.props;
    try {
      const cat = categories.find(category => category.slug === catSlug);
      if (!cat) return [];
      return products.filter(product => product.categories?.find(productCategory => productCategory.id === cat.id));
    } catch (error) {
      console.error("Error filtering products by category:", error);
      return []; // Return an empty array in case of an error
    }
  }

  renderCollections() {
    const { categories = [] } = this.props;

    return <>
      <ErrorBoundary>
        {categories.map(category => (
          <div key={category.id} className="lanepark-collection">
            <h2 id={category.slug}>{category.name || 'No Name'}</h2>
            <div className="lanepark-product-grid">
              {this.filterProductsByCat(category.slug).map(product => (
                <ProductCard
                  key={product.id}
                  permalink={product.permalink}
                  image={product.media?.source || 'default_image_path'} // Provide a default or check for existence
                  name={product.name || 'Unnamed Product'}
                  price={product.price?.formatted_with_symbol || '$0.00'} // Provide a default formatting
                />
              ))}
            </div>
          </div>
        ))}
      </ErrorBoundary>
    </>
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
