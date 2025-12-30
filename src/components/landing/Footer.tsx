export function Footer() {
    return (
        <footer className="py-12 border-t bg-muted/20">
            <div className="container mx-auto px-4 text-center space-y-4">
                <div className="py-8">
                    <img
                        src="/thc-landing-page/DARK_HR.png"
                        alt="The Hiring Company"
                        className="w-[80vw] max-w-[600px] h-auto mx-auto opacity-90"
                    />
                </div>
                <p className="text-muted-foreground italic text-lg">
                    Building the future of outcomes-first hiring.
                </p>
                <div className="pt-8 text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} The Hiring Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
