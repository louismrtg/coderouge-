import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import QuestionForm from "./pages/QuestionForm";
import LiveQuestions from "./pages/LiveQuestions";
import Reportages from "./pages/Reportages";
import About from "./pages/About";
import Legal from "./pages/Legal";
import OBSPage from "./pages/OBS";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poser-une-question" element={<QuestionForm />} />
          <Route path="/questions-en-direct" element={<LiveQuestions />} />
          <Route path="/questions" element={<LiveQuestions />} />
          <Route path="/reportages" element={<Reportages />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/plan-du-site" element={<Sitemap />} />
          <Route path="/obs" element={<OBSPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
