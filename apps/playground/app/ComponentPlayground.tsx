"use client";

// playground.tsx
import { Button, Icon, Typography } from "@bermuda-ui/foundation";
import React, { useState } from "react";

export default function ComponentPlayground() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-background p-8 space-y-16">
      
      {/* Typography Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-heading mb-8">Typography</h2>
        
        {/* Display */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Display</h3>
          <div className="space-y-2">
            <Typography kind="display" size="small" color="heading">
              Display Small - Hero Text
            </Typography>
            <Typography kind="display" size="medium" color="heading">
              Display Medium - Hero Text
            </Typography>
            <Typography kind="display" size="large" color="heading">
              Display Large - Hero Text
            </Typography>
          </div>
        </div>

        {/* Headings */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Headings</h3>
          <div className="space-y-2">
            <Typography kind="heading" size={1} color="heading">
              Heading 1 - Page Title
            </Typography>
            <Typography kind="heading" size={2} color="heading">
              Heading 2 - Section Title
            </Typography>
            <Typography kind="heading" size={3} color="heading">
              Heading 3 - Subsection Title
            </Typography>
            <Typography kind="heading" size={4} color="heading">
              Heading 4 - Minor Title
            </Typography>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Text</h3>
          <div className="space-y-3">
            <Typography kind="text" size="small" color="body">
              Small text - Perfect for captions, labels, and supporting content that needs to be subtle.
            </Typography>
            <Typography kind="text" size="medium" color="body">
              Medium text - The default body text size for most content, providing excellent readability.
            </Typography>
            <Typography kind="text" size="large" color="body">
              Large text - Used for emphasized body content, introductions, or important paragraphs.
            </Typography>
          </div>
        </div>

        {/* Text Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Text Variants</h3>
          <div className="space-y-2">
            <Typography kind="text" size="medium" weight="light" color="body">
              Light weight text
            </Typography>
            <Typography kind="text" size="medium" weight="base" color="body">
              Base weight text
            </Typography>
            <Typography kind="text" size="medium" weight="semibold" color="body">
              Semibold weight text
            </Typography>
            <Typography kind="text" size="medium" weight="bold" color="body">
              Bold weight text
            </Typography>
          </div>
        </div>

        {/* Text Colors */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Text Colors</h3>
          <div className="space-y-2">
            <Typography kind="text" size="medium" color="body">Body color</Typography>
            <Typography kind="text" size="medium" color="heading">Heading color</Typography>
            <Typography kind="text" size="medium" color="accent">Accent color</Typography>
            <Typography kind="text" size="medium" color="active">Active color</Typography>
            <Typography kind="text" size="medium" color="danger">Danger color</Typography>
            <Typography kind="text" size="medium" color="muted">Muted color</Typography>
          </div>
        </div>

        {/* Underline */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Underline</h3>
          <div className="space-y-2">
            <Typography kind="text" size="medium" underline="always" color="accent">
              Always underlined
            </Typography>
            <Typography kind="text" size="medium" underline="hover" color="accent">
              Underlined on hover
            </Typography>
          </div>
        </div>
      </section>

      {/* Icons Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-heading mb-8">Icons</h2>

        {/* Icon Sizes */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Sizes</h3>
          <div className="flex items-center gap-4">
            <div className="space-y-2">
              <Icon name="User" size="inline" />
              <Typography kind="text" size="small" color="muted">Inline (1em)</Typography>
            </div>
            <div className="space-y-2">
              <Icon name="User" size="small" />
              <Typography kind="text" size="small" color="muted">Small (16px)</Typography>
            </div>
            <div className="space-y-2">
              <Icon name="User" size="medium" />
              <Typography kind="text" size="small" color="muted">Medium (20px)</Typography>
            </div>
            <div className="space-y-2">
              <Icon name="User" size="large" />
              <Typography kind="text" size="small" color="muted">Large (24px)</Typography>
            </div>
          </div>
        </div>

        {/* Icon with Text */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Inline with Text</h3>
          <div className="space-y-2">
            <Typography kind="text" size="small">
              <Icon name="User" size="inline" /> Small text with inline icon
            </Typography>
            <Typography kind="text" size="medium">
              <Icon name="User" size="inline" /> Medium text with inline icon
            </Typography>
            <Typography kind="text" size="large">
              <Icon name="User" size="inline" /> Large text with inline icon
            </Typography>
          </div>
        </div>

        {/* Transition Icons */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Transition Icons</h3>
          <div className="flex items-center gap-8">
            <div className="space-y-2">
              <Icon
                transition={{
                  primary: "Moon",
                  secondary: "Sun",
                  active: isDark,
                }}
                size="large"
              />
              <Button
                label={isDark ? "Light" : "Dark"}
                onClick={() => setIsDark(!isDark)}
                size="default"
                variant="secondary"
              />
            </div>
            <div className="space-y-2">
              <Icon
                transition={{
                  primary: "Menu",
                  secondary: "X",
                  active: isMenuOpen,
                }}
                size="large"
              />
              <Button
                label={isMenuOpen ? "Close" : "Menu"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                size="default"
                variant="secondary"
              />
            </div>
            <div className="space-y-2">
              <Icon
                transition={{
                  primary: "ChevronDown",
                  secondary: "ChevronUp",
                  active: isExpanded,
                }}
                size="large"
              />
              <Button
                label={isExpanded ? "Collapse" : "Expand"}
                onClick={() => setIsExpanded(!isExpanded)}
                size="default"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-heading mb-8">Buttons</h2>

        {/* Button Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Button Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button kind="button" variant="primary" label="Primary" />
            <Button kind="button" variant="secondary" label="Secondary" />
            <Button kind="button" variant="ghost" label="Ghost" />
            <Button kind="button" variant="danger" label="Danger" />
          </div>
        </div>

        {/* Button Sizes */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Button Sizes</h3>
          <div className="flex items-center gap-4">
            <Button kind="button" variant="primary" label="Default Button" size="default" />
            <Button kind="button" variant="primary" label="Large Button" size="large" />
          </div>
        </div>

        {/* Buttons with Icons */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Buttons with Icons</h3>
          <div className="flex flex-wrap gap-4">
            <Button
              kind="button"
              variant="primary"
              label="Save"
              startIcon={{ name: "Save", size: "medium" }}
            />
            <Button
              kind="button"
              variant="secondary"
              label="Delete"
              startIcon={{ name: "Trash2", size: "medium" }}
            />
            <Button
              kind="button"
              variant="primary"
              label="Next"
              endIcon={{ name: "ArrowRight", size: "medium" }}
            />
            <Button
              kind="button"
              variant="secondary"
              label="Download"
              startIcon={{ name: "Download", size: "medium" }}
              endIcon={{ name: "ExternalLink", size: "medium" }}
            />
          </div>
        </div>

        {/* Icon Only Buttons */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Icon Only Buttons</h3>
          <div className="flex items-center gap-4">
            <Button kind="button" variant="primary" icon={{ name: "Plus" }} />
            <Button kind="button" variant="secondary" icon={{ name: "Settings" }} />
            <Button kind="button" variant="ghost" icon={{ name: "Heart" }} />
            <Button kind="button" variant="danger" icon={{ name: "Trash2" }} />
          </div>
        </div>

        {/* Icon Only with Transition */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Icon Buttons with Transition</h3>
          <div className="flex items-center gap-4">
            <Button
              kind="button"
              variant="ghost"
              onClick={() => setIsDark(!isDark)}
              icon={{
                transition: {
                  primary: "Moon",
                  secondary: "Sun",
                  active: isDark,
                },
              }}
            />
            <Button
              kind="button"
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              icon={{
                transition: {
                  primary: "Menu",
                  secondary: "X",
                  active: isMenuOpen,
                },
              }}
            />
            <Button
              kind="button"
              variant="secondary"
              label="Toggle"
              startIcon={{
                transition: {
                  primary: "ChevronDown",
                  secondary: "ChevronUp",
                  active: isExpanded,
                },
              }}
              onClick={() => setIsExpanded(!isExpanded)}
            />
          </div>
        </div>

        {/* Button States */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Button States</h3>
          <div className="flex flex-wrap gap-4">
            <Button kind="button" variant="primary" label="Normal" />
            <Button kind="button" variant="primary" label="Active" isActive />
            <Button kind="button" variant="primary" label="Disabled" isDisabled />
            <Button kind="button" variant="primary" label="Loading" isLoading />
          </div>
        </div>

        {/* Button with Badge */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Buttons with Badge</h3>
          <div className="flex flex-wrap gap-4">
            <Button
              kind="button"
              variant="secondary"
              label="Notifications"
              badgeEnabled
              startIcon={{ name: "Bell" }}
            />
            <Button
              kind="button"
              variant="ghost"
              icon={{ name: "MessageCircle" }}
              badgeEnabled
              badgePulsing
            />
            <Button
              kind="button"
              variant="primary"
              label="Messages"
              badgeEnabled
              badgePulsing
              startIcon={{ name: "Mail" }}
            />
          </div>
        </div>

        {/* Button Shapes */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Button Shapes</h3>
          <div className="flex flex-wrap gap-4">
            <Button kind="button" variant="primary" label="Default" curve="default" />
            <Button kind="button" variant="primary" icon={{ name: "Heart" }} curve="circle" />
            <Button kind="button" variant="secondary" label="Full Width" shape="fullwidth" />
          </div>
        </div>

        {/* Link Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Link Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button kind="link" variant="inline" label="Inline Link" />
            <Button kind="link" variant="breadcrumb" label="Breadcrumb" />
            <Button kind="link" variant="toc" label="Table of Contents" />
            <Button kind="link" variant="navbar" label="Navbar Link" />
          </div>
        </div>

        {/* Link States */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-heading">Link States</h3>
          <div className="flex flex-wrap gap-4">
            <Button kind="link" variant="navbar" label="Inactive" isActive={false} />
            <Button kind="link" variant="navbar" label="Active" isActive={true} />
            <Button kind="link" variant="breadcrumb" label="Inactive" isActive={false} />
            <Button kind="link" variant="breadcrumb" label="Active" isActive={true} />
          </div>
        </div>
      </section>
    </div>
  );
}