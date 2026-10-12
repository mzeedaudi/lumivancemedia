// Header for plain pages (contact, privacy, terms): a title and one line.
export default function PageHeader({ title, intro }) {
  return (
    <header className="wrap pb-10 pt-12 lg:pb-14 lg:pt-20">
      <h1 className="display h1s max-w-[820px]">{title}</h1>
      {intro && <p className="lede mt-5 max-w-measure text-graphite">{intro}</p>}
    </header>
  );
}
