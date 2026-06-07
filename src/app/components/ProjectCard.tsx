type Props = {
  title: string;
  client: string;
  date: string;
  tag: string;
  description: string;
  image?: string;
};

export function ProjectCard({ title, client, date, tag, description, image }: Props) {
  return (
    <div className="group bg-white rounded-[29px] overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="rounded-[29px] w-full overflow-hidden aspect-square">
        {image
          ? <img src={image} alt={title} className="w-full h-full object-cover" />
          : <div className="bg-[#717171] w-full h-full" />
        }
      </div>
      <div className="flex flex-col gap-3 px-6 pb-6 pt-4 flex-1">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center justify-between w-full gap-3">
            <p
              className="text-[#2649d5] leading-[1.1]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: 40 }}
            >
              {title}
            </p>
            <div className="rounded-full border border-[#acb6de] px-4 py-1 shrink-0">
              <p
                className="text-[#acb6de] leading-[1.2] whitespace-nowrap"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 14 }}
              >
                {tag}
              </p>
            </div>
          </div>
          <p
            className="text-[#acb6de] leading-[1.1]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: 16 }}
          >
            {date}
          </p>
        </div>
        <p
          className="text-[#090f27] leading-[1.3]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: 18 }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
