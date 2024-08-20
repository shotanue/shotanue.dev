import { App } from "@repo/ui";

export const dynamic = "force-static";

type Props = {
  params: {
    txt: string;
  };
};

export default function ({ params: { txt } }: Props) {
  return <App txt={txt} />;
}

export async function generateStaticParams() {
  return [
    {
      txt: "hogehoge",
    },
    {
      txt: "fugafuga",
    },
  ];
}
