document.getElementsByTagName('meta')["description"].content = "A site developed by an Engineer from electronics/instrument/electrical field";

export default function Header({ title }) {
  return <h1 className="title">{title}</h1>
}
