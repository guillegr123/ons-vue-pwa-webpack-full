import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import HomePage from '@/components/HomePage'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('HomePage.vue', () => {
  const Constructor = Vue.extend(HomePage){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const vm = new Constructor().$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('ons-toolbar .center').textContent)
      .to.equal('Welcome'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  it('should contain proper list items', () => {
    expect(vm.essentialLinks.every(item => item.link && item.icon && item.label)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  it('opens a new tab when clicking an item', () => {
    const stub = sinon.stub(window, 'open'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    // Click on the first item
    vm.$el.querySelectorAll('ons-list-item')[0].click(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(stub).calledWithExactly(vm.essentialLinks[0].link, '_blank'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    stub.restore(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

