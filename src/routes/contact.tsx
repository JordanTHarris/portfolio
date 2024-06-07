import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    try {
      emailjs.init({ publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY! });
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID!,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID!,
        templateParams,
      );
      form.reset();
      toast.success("Email sent successfully!");
    } catch (error) {
      toast.error("Error sending email");
    }
  }

  return (
    <main className="mx-0 flex h-full w-full flex-col items-center justify-center gap-12 overflow-y-auto overflow-x-hidden px-2 md:container md:mx-auto">
      <Card className="w-full max-w-lg transition-none duration-1000 animate-in fade-in">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <CardHeader>
              <CardTitle>Get in touch</CardTitle>
              <CardDescription>
                Have a question or want to work together? Fill out the form below.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel>Name</FormLabel>
                      <FormMessage className="leading-none" />
                    </div>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel>Email</FormLabel>
                      <FormMessage className="leading-none" />
                    </div>
                    <FormControl>
                      <Input placeholder="someone@example.com" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel>Message</FormLabel>
                      <FormMessage className="leading-none" />
                    </div>
                    <FormControl>
                      <Textarea
                        className="min-h-32"
                        placeholder="Enter your message"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="justify-end">
              <Button className="w-full sm:w-20" type="submit">
                {form.formState.isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Send"
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </main>
  );
}
