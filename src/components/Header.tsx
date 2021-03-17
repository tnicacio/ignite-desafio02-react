interface HeaderProps {
  title: string;
  subTitle: string;
}

export function Header({ title, subTitle }: HeaderProps) {
  return (
    <header>
      <span className="category">
        {title}: <span> {subTitle} </span>
      </span>
    </header>
  );
}
