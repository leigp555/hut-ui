<template>
  <div id="algolia-autocomplete" class="autocomplete-wrap"></div>
</template>

<script lang="ts" setup>
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js'
import algoliasearch from 'algoliasearch'
import '@algolia/autocomplete-theme-classic'
import { onMounted } from 'vue'

const searchClient = algoliasearch('6QDXG2F1C8', '75833f367ec8d63a3e37b595c71ee9ad')

onMounted(() => {
  autocomplete({
    container: '#algolia-autocomplete',
    placeholder: '搜索',
    getSources({ query }) {
      return [
        {
          sourceId: 'component',
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: 'componentName',
                  query,
                  params: {
                    hitsPerPage: 20
                  }
                }
              ]
            })
          },
          templates: {
            item({ item, components, html }) {
              return html`<div class="search-algolia">
                <a class="search-algolia-item" href="#${item.url}">
                  ${components.Highlight({
                    hit: item,
                    attribute: 'componentName'
                  })}
                </a>
              </div>`
            }
          }
        }
      ]
    }
  })
})

// 上传
// algoliasearch的一次个参数传入账号提供的Application ID ， 第二个传入Admin API Key
// const client = algoliasearch('6QDXG2F1C8', '2765d6a1c530dad83b846459001bc8f3')
// const index = client.initIndex('componentName')
// 声明Json数组
// const objects = []
// index.saveObjects(objects).then(({ objectIDs }) => {
//   console.log(objectIDs)
// })
</script>

<style lang="scss">
$main_color: #1890ff;
.aa-Autocomplete {
  height: 34px;
  font-size: 14px;
  border: none;
  width: 200px;
  button {
    height: 34px;
  }
  display: inline-block;
  .aa-Form {
    border: 1px solid #d9d9d9;
    transition: all 250ms;
    &:focus-within {
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      border: 1px solid $main_color;
    }
    &:hover {
      border: 1px solid $main_color;
    }
    > .aa-InputWrapperPrefix {
      height: 34px;
      button {
        padding-top: 0;
        padding-bottom: 0;
        display: inline-flex;
        align-items: center;
        padding-left: 10px;
        width: 38px;
        svg {
          padding-right: 0 !important;
          width: 18px;
          height: 18px;
          fill: rgba(0, 0, 0, 0.45);
        }
      }
    }
    > .aa-InputWrapper {
      > input {
        height: 34px;
        font-size: 14px;
        white-space: nowrap;
        color: #000000d9;
      }
    }
    > .aa-InputWrapperSuffix {
      height: 34px;
    }
  }
}

.aa-Panel {
  width: 100%;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  transition: all 250ms;
  z-index: 3000;
  .aa-PanelLayout {
    max-height: 200px !important;
    &::-webkit-scrollbar {
      //整个滚动条的宽高设置
      width: 6px; //宽高只有一个能生效，如果是横向滚动条高度生效，纵向滚动条宽度生效
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      //滚动条滑块的设置
      border-radius: 3px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      background-color: #cccccc;
      border: none;
      &:hover {
        background-color: #b2b2b2;
      }
    }
    &::-webkit-scrollbar-track {
      //滚动条轨道设置
      background-color: transparent;
    }
    .aa-Item {
      padding: 0 !important;
      font-size: 14px;
      height: auto;
      background: #ffffff !important;
      &:hover {
        background: #e6f7ff !important;
      }
      //border: 1px solid red;
      > .search-algolia {
        height: 100%;
        a {
          text-decoration: none;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding: 4px 11px;
          color: #000000d9;
          > mark {
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
