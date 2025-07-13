export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                {/* Logo space */}
              </div>
              <span className="text-xl font-bold">Nrityayog Kathak Institute</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Learn classical Kathak dance under the expert guidance of Anupama Bhadri Kothiyal 
              at our studio in Dehradun. Classes available for all levels.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Kathak
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/b.anupma.86?igsh=bmRkMnp4bWxybXg5" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@anupmakathak3701?si=ZRz9bvtCE7QNgqYC" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Shastri Nagar</p>
              <p>Haridwar Road</p>
              <p>Dehradun</p>
              <p className="mt-3">9808487238</p>
              <p>vidyarthianupama@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Nrityayog Kathak Institute. All rights reserved. | Learn Kathak with Anupama Bhadri Kothiyal.</p>
        </div>
      </div>
    </footer>
  );
}