import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";
import { common } from 'src/assets/src/translations/en/common';
import { cart } from 'src/assets/src/translations/en/cart';
import { address } from 'src/assets/src/translations/en/address';
import { payment } from 'src/assets/src/translations/en/payment';
import {product} from 'src/assets/src/translations/en/product'
export const TranslationOverwrites = {
  en:{
    common: common,
    cart: cart,
    address: address,
    payment: payment,
    product: product
  }
}

@NgModule({
  declarations: [],
  imports: [
  ],
  
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://localhost:9002',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD'],
      language: ['en'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '4.3'
    }
  }), provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD'],
      language: ['en'],
      baseSite: ['electronics-spa'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    }
  }), provideConfig({
    i18n: {resources: TranslationOverwrites} ,
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '4.3'
    }
  })]

  
})


export class SpartacusConfigurationModule { }
