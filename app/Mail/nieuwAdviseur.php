<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class nieuwAdviseur extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(protected $adviseurDetails)
    {
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('bill@jumba.nl', Auth::user()->name),
            replyTo: [
                new Address('sander@jumba.nl', 'Sander van der AA'),
            ],        
            subject: 'Aankoop Rapport',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
            return new Content(
                view: 'emails.aankoop.rapport',
                with: [
                    'klantDetails' => $this->adviseurDetails,
                    'user' => Auth::user(),
                    'woning' =>  Session::get('woningDetails'),
                ],
            );   
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
