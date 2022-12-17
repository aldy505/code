interface Props {
  link: string;
  text: string;
}

function LinkList(props: Props) {
  return (
    <li
      class='opacity-75 hover:opacity-100 transition duration-500 ease-in-out py-2 text-base lg:text-2xl'
    >
      <a
        href={props.link}
        class='hover:underline-light-300 hover:text-blue-100'
      >{props.text}</a>
    </li>
  );
}

export default LinkList;
