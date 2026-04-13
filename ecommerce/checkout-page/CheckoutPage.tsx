"use client";

import { ArrowLeft, ShieldCheck, Package } from "lucide-react";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigitalcn/uikit/card";
import Button from "@mdigitalcn/uikit/button";
import Divider from "@mdigitalcn/uikit/divider";
import Stepper from "@mdigitalcn/uikit/stepper";
import { cn } from "@mdigitalcn/uikit";
import type { CheckoutPageProps } from "./CheckoutPage.types";

export default function CheckoutPage({
  items,
  subtotal,
  tax,
  shipping,
  total,
  shippingForm,
  paymentForm,
  onSubmit,
  onBack,
  loading,
  currentStep = 0,
  className,
}: CheckoutPageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Checkout</h1>
        {onBack && (
          <Button variant="ghost" icon={<ArrowLeft className="size-4" />} onClick={onBack}>
            Continue shopping
          </Button>
        )}
      </div>

      <Stepper
        currentStep={currentStep}
        steps={[
          { label: "Cart" },
          { label: "Shipping" },
          { label: "Payment" },
          { label: "Confirmation" },
        ]}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {shippingForm && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Shipping Address</CardTitle>
              </CardHeader>
              <CardContent>{shippingForm}</CardContent>
            </Card>
          )}
          {paymentForm && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Payment Method</CardTitle>
              </CardHeader>
              <CardContent>{paymentForm}</CardContent>
            </Card>
          )}
        </div>

        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="text-base">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-12 w-12 rounded-md border object-cover"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-text-secondary">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium">{item.price}</p>
                  </div>
                ))}
              </div>

              <Divider />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span>{subtotal}</span>
                </div>
                {shipping && (
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Shipping</span>
                    <span>{shipping}</span>
                  </div>
                )}
                {tax && (
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Tax</span>
                    <span>{tax}</span>
                  </div>
                )}
              </div>

              <Divider />

              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-lg">{total}</span>
              </div>

              {onSubmit && (
                <>
                  <Button
                    color="primary"
                    fullWidth
                    size="lg"
                    loading={loading}
                    onClick={onSubmit}
                  >
                    Place order
                  </Button>
                  <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-text-secondary">
                    <ShieldCheck className="size-3.5" />
                    Secure, encrypted checkout
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
