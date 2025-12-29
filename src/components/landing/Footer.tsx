export function Footer() {
    return (
        <footer className="py-12 border-t bg-muted/20">
            <div className="container mx-auto px-4 text-center space-y-4">
                <h3 className="font-bold text-xl">The Hiring Company</h3>
                <p className="text-muted-foreground italic">
                    Building the future of outcomes-first hiring.
                </p>
                <div className="pt-8 text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} The Hiring Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
