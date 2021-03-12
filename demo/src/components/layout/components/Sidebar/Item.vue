
<script>
  export default {
    name: 'MenuItem',
    functional: true,
    props: {
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    render(h, context) {
      const { icon, title } = context.props;
      const vnodes = [];
      var myClass = 'iconImg'+' '+'iconfont'+' '+icon; 
      vnodes.push(<i class={myClass}></i>);
      vnodes.push(<span slot='title'>{(title)}</span>);
      return vnodes
    }
  }
</script>


