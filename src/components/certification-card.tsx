import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  href?: string;
  description?: string;
}

export function CertificationCard({
  title,
  issuer,
  date,
  image,
  href,
  description,
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      {image && (
        <Link
          href={href || "#"}
          className="block cursor-pointer"
        >
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-center"
          />
        </Link>
      )}
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <p className="font-sans text-sm text-muted-foreground">{issuer}</p>
          <time className="font-sans text-xs text-muted-foreground">{date}</time>
          {description && (
            <p className="font-sans text-xs text-muted-foreground mt-2">
              {description}
            </p>
          )}
        </div>
      </CardHeader>
      {href && (
        <CardFooter className="px-2 pb-2 mt-auto">
          <Link href={href} target="_blank">
            <Badge className="px-2 py-1 text-xs bg-blue-600 hover:bg-blue-700">
              View Credential
            </Badge>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
