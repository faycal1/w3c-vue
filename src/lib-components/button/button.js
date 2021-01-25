import W3cIcon from '../icon/index';
import config from '../../utils/config';

export default {
  name: 'W3cButton',
  components: {
    [W3cIcon.name]: W3cIcon
  },
  inheritAttrs: false,
  props: {
    type: [String, Object],
    size: String,
    label: String,
    iconPack: String,
    iconLeft: String,
    iconRight: String,
    rounded: {
      type: Boolean,
      default: () => {
        return config.defaultButtonRounded;
      }
    },
    loading: Boolean,
    outlined: Boolean,
    expanded: Boolean,
    inverted: Boolean,
    focused: Boolean,
    active: Boolean,
    hovered: Boolean,
    selected: Boolean,
    nativeType: {
      type: String,
      default: 'button',
      validator: (value) => {
        return [
          'button',
          'submit',
          'reset'
        ].indexOf(value) >= 0
      }
    },
    tag: {
      type: String,
      default: 'button',
      validator: (value) => {
        return config.defaultLinkTags.indexOf(value) >= 0
      }
    }
  },
  computed: {
    computedTag() {
      if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
        return 'button'
      }
      return this.tag
    },
    iconSize() {
      if (!this.size || this.size === 'is-medium') {
        return 'is-small'
      } else if (this.size === 'is-large') {
        return 'is-medium'
      }
      return this.size
    }
  },
  methods: {
    faSpinner(){
      return this.loading ? 'fa-spin' : null
    }
  }

}


