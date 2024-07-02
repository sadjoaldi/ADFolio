/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { ContactCard } from "./ContactCard";
import { SIDE_PROJECTS } from "./SIDE_PROJECTS";
import Section from "./Section";
import { SideProjects } from "./SideProjects";
import { WORKS } from "./WORKS";
import { Work } from "./Work";

export default function Status() {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, Fun Projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, idx) => (
              <SideProjects
                key={idx}
                Logo={project.Logo}
                title={project.title}
                madeWith={project.madeWith}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col  gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, idx) => (
              <Work
                key={idx}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}{" "}
          </div>
        </Card>
        <Card className="p-4 flex-1 ">
          <p className="text-lg text-muted-foreground">contact me</p>
          <ContactCard
            image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUKZsL///8AYsFqk9JFfsoAXsCQrdsAV74AZMH3+fwAXb8AYMAAWb4AW78gbMQSacMqcMUAVb3m7vjI2O6guOCatuDc5vQ6e8nT4PG6zuqvxeaBpdmFpdjz9/x1ntZhkNExdsimv+TD1OxUic5JhM20yOfY4/Ps8vmTsd5/X6OuAAAED0lEQVR4nO2d63aqMBBGGxSJCXgD9SheoNbW93/Cg/WctgpMaGWE0G//htXs5sJkMlk+PQEAAAAAAAAAAAAAAAAAAAAAAAAAAADuRDradV3tyKYbwoN0/af9JoqieO/4bvckpZ+kM/GfxXwUdMxRJaG4ZjVSTTeqRqQXiTwDrzPdKPVrgaAQYVdGqpRvhYLZdFSdUJT+rERQiD9e062rA39VKihEFDTdvPtx9oSgEEv7x6lXPka7MU6dHikoRN/2Tgz+GAxXln/4pTYIiqHla41xkFo/TN2icO2aWDfdyLtQ1MfwQuo23ci7MC401i81v8DwdluY52i3YYV5GNk9D/XcaGj5WmqIu89YHntL1yS49Ztu450Yl5q13QtNhWGa2D1IM7wFKRjaPkizmfhCGk6s78JsJqaE4MD2WfiOVx65razPYbwj3bKpGHZD8JwxfS4UXHcore/Feb/hris9+I77tL4RTLXd8WgOqeTmc8UJY92NI4srpA7UsrfZbPZJEOju+V2QOqOrx/gAAABAo0hHa1cpda6Y6963NouUgtEhPqXr9Toa7F7G9sRLsojbZ7SXDMLtVUS/DU9977FBr+NR5Joi1YWLkjO+MLlw/WQwmheXQQyPL97jdi5OTwzLyZ8A63+PFzb9S95K+sviffWFWfwwR8M5960hnSQffTytJpTfmW38oBQCi6H0zCc+WT/2H1IFwWHoJnQZ0gfRI7qRwdDfVfPLWEjHQsNpWlkwm40TdsXaDT3zsfIVS27Fug2n3xTMPjHMijUb+ul3BcWWOVit11BVX2Q+eZ3aYzie/ECQuxK5VkNVXPRvhLU6sFbDzc8ExYxznNZq+GN2jGF4Owy3jDvGdhhyVl61xPCNbya2xFAc2CKbthiu2L6JbTEUbNdWW2O45xqmrTFkq0XmNFw8r9fHsGJGY8ZV+sFmuNorL1BKBZ7cVQpXx0wTkckwlcFHPYB0vEPZNdUvcE1EFsNZcnOFWFe4FDBnKpnnMAz9/GHA1Kj4zLTUMBiGRVlQ6rrxhQVTsW79hoviNK+zNLy3taYPRyVrInml+gzTwWLthnHZgiFNnVj2r2mZIfHhNhTNc2Vr6jYktrJ6QL/KtIGq25BIR8iEfrVnhSG5zfOLT47tMtxRrTTc57TDkAyf1dF+wzcyLtEn+w1DMtuiC64E2GZIb9QNF+WsMKQvDcuD/YZzMnXdBcMTbUjfBLTCcEAb9mEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCMNuGRpqhBsxlJMeRe7GnCQfp386SY7Il7l+D0U6FPk/+s3H7/pbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPA7+AuM4Fva6iVlRAAAAABJRU5ErkJggg=="
            // mediumImage="https://avatars.githubusercontent.com/u/118755025?v=4"
            name="LinkedIn"
            description="Alhassane"
            url="https://www.linkedin.com/in/alhassanedialloo/"
          />
          <ContactCard
            image="data:image/png;base64,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"
            // mediumImage="https://avatars.githubusercontent.com/u/118755025?v=4"
            name="Mail"
            description="alsannealdi@hotmail.com"
            url="alsannealdi@hotmail.com"
          />
        </Card>
      </div>
    </Section>
  );
}
